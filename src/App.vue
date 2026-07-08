<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

const users = [
  {
    id: 1,
    name: "Administrator",
    role: "Super Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Support",
    status: "Inactive",
  },
];
</script>

<template>
  <div class="p-10">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="user in users"
          :key="user.id"
        >
          <TableCell>{{ user.id }}</TableCell>
          <TableCell>{{ user.name }}</TableCell>
          <TableCell>{{ user.role }}</TableCell>
          <TableCell>
            <Badge>
              {{ user.status }}
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>