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
        <PageTitle> Tickets </PageTitle>

        <PageDescription> Manage support tickets. </PageDescription>
      </div>

      <template #actions>
        <PrimaryButton> Create Ticket </PrimaryButton>

        <SecondaryButton> Export </SecondaryButton>
      </template>
    </PageHeader>

    <PageBody> ... </PageBody>
  </PageContainer>
</template>
