<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>

<template>
  <div class="min-h-screen bg-muted flex items-center justify-center p-8">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle>Ticketing App</CardTitle>
      </CardHeader>

      <CardContent class="space-y-4">
        <div>
          <Label>Email</Label>
          <Input placeholder="email@example.com" />
        </div>

        <div>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="********"
          />
        </div>

        <Button class="w-full">
          Sign In
        </Button>
      </CardContent>
    </Card>
  </div>
</template>