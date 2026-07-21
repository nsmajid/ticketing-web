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
        <PageTitle> Users </PageTitle>

        <PageDescription> Manage system users. </PageDescription>
      </div>

      <template #actions>
        <!-- Create Button -->
        <PrimaryButton> Create User </PrimaryButton>
      </template>
    </PageHeader>

    <PageBody>
      <UserTable />
    </PageBody>
  </PageContainer>
</template>
