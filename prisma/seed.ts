import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.entry.deleteMany()

  await prisma.entry.createMany({
    data: [
      { description: "Configurar autenticación de usuarios", status: "finished" },
      { description: "Diseñar esquema de base de datos", status: "finished" },
      { description: "Implementar API REST de entries", status: "in-progress" },
      { description: "Agregar validaciones en formularios", status: "in-progress" },
      { description: "Crear tests unitarios", status: "pending" },
      { description: "Configurar CI/CD pipeline", status: "pending" },
      { description: "Optimizar queries de base de datos", status: "pending" },
      { description: "Documentar endpoints de la API", status: "pending" },
    ],
  })

  const count = await prisma.entry.count()
  console.log(`Seed completado: ${count} entries creadas`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
