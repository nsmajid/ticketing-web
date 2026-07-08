<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
</script>

<template>
  <div class="p-8">
    <Tabs default-value="detail">
      <TabsList>
        <TabsTrigger value="detail">
          Detail
        </TabsTrigger>

        <TabsTrigger value="comment">
          Comment
        </TabsTrigger>

        <TabsTrigger value="history">
          History
        </TabsTrigger>
      </TabsList>

      <TabsContent value="detail">
        Ticket Detail Content
      </TabsContent>

      <TabsContent value="comment">
        Ticket Comment Content
      </TabsContent>

      <TabsContent value="history">
        Ticket History Content
      </TabsContent>
    </Tabs>
  </div>
</template>