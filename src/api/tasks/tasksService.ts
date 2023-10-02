// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import { Task, TaskWithOrder } from "./tasksModel";

export async function createTaskService(taskData: Task) {
  const newTask = await prisma.task.create({
    data: {
      name: taskData.name,
      description: taskData.description,
      priority: taskData.priority === null ? "None" : taskData.priority,
      section: {
        connect: {
          id: taskData.sectionId,
        },
      },
      order: taskData.order,
      // assignee: {
      //   connect: {
      //     id: task.assignee.id,
      //   },
      // },
    },
  });
  return newTask;
}

export async function findOneTaskService(id: string) {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
    include: {
      assignee: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      tags: true,
    },
  });

  return task;
}

export async function updateTaskService(id: string, taskData: Task) {
  if (taskData.assigneeId) {
    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        section: {
          connect: {
            id: taskData.sectionId,
          },
        },
      },
    });

    return updatedTask;
  }

  if (taskData.sectionId) {
    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        section: {
          connect: {
            id: taskData.sectionId,
          },
        },
      },
    });

    return updatedTask;
  }

  const updatedTask = await prisma.task.update({
    where: {
      id,
    },
    data: {
      ...taskData,
    },
  });

  return updatedTask;
}

export async function updateTwoTasksService(
  firstTask: TaskWithOrder,
  secondTask: TaskWithOrder
) {
  const updatedFirstTask = await prisma.task.update({
    where: {
      id: firstTask.id,
    },
    data: {
      //! Use the other task's ORDER
      order: secondTask.order,
    },
  });

  const updatedSecondTask = await prisma.task.update({
    where: {
      id: secondTask.id,
    },
    data: {
      //! Use the other task's ORDER
      order: firstTask.order,
    },
  });

  return { updatedFirstTask, updatedSecondTask };
}

export async function deleteTaskService(id: string) {
  const deletedTask = await prisma.task.delete({
    where: {
      id,
    },
  });

  return deletedTask;
}
