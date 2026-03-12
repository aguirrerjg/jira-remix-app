/* eslint-disable react-hooks/exhaustive-deps */
import { EntryList } from '~/components/entries';
import { Grid } from '@chakra-ui/react';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData, useActionData } from '@remix-run/react';
import { prisma } from '~/utils/db';
import { EntriesContext } from '../context/entries/EntriesContext';
import type { Entry } from '../context/entries/EntriesContext';
import { useContext, useEffect } from 'react';

type ActionData = {
  msg: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get('_action') as string;

  if (_action === 'create') {
    const description = formData.get('description') as string;
    if (description.length === 0) {
      return {
        msg: 'the name is required',
      };
    }
    await prisma.entry.create({
      data: { description },
    });
  }
  if (_action === 'update') {
    const id = formData.get('id') as string;
    const status = formData.get('status') as string;
    await prisma.entry.update({
      where: { id },
      data: { status },
    });
  }

  return {
    status: 'ok',
    msg: 'Action executed',
  };
};

export const loader: LoaderFunction = async () => {
  try {
    const entries = await prisma.entry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return entries;
  } catch (error: any) {
    console.error('LOADER ERROR:', error.message, error.stack);
    throw new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default function Index() {
  const entries = useLoaderData<Entry[]>();
  const { saveEntriesToState } = useContext(EntriesContext);

  const actionData = useActionData<ActionData>();

  useEffect(() => {
    saveEntriesToState(entries);
  }, [entries]);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={6}
      p="4"
      as="section"
    >
      <EntryList status="pending" msg={actionData?.msg} />
      <EntryList status="in-progress" />
      <EntryList status="finished" />
    </Grid>
  );
}
