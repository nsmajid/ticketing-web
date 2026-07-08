<script setup lang="ts">
import { ref } from "vue";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const open = ref(false);
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <Dialog v-model:open="open">
      <DialogTrigger as-child>
        <Button>
          Open Dialog
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Ticketing App
          </DialogTitle>

          <DialogDescription>
            Dialog berhasil di-render.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button @click="open = false">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>