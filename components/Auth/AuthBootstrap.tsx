"use client";
import { useEffect } from "react";
import { useProfile } from "@/components/hooks/useAuth";

export default function AuthBootstrap() {
  // This will trigger profile fetch and update zustand on mount if token exists
  useProfile();
  return null;
} 