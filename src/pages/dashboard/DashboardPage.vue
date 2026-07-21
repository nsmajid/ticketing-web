<script setup lang="ts">
import {
  PageBody,
  PageContainer,
  PageDescription,
  PageHeader,
  PageTitle,
} from '@/components/layout'
</script>

<template>
  <PageContainer>
    <PageHeader>
      <div>
        <PageTitle> Dashboard </PageTitle>

        <PageDescription> Dashboard Page </PageDescription>
      </div>

      <template #actions>
        <!-- Create Button -->
      </template>
    </PageHeader>

    <PageBody>
      <UserTable />
    </PageBody>
  </PageContainer>
</template>
