import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CopyEmailButton } from "@/components/CopyEmailButton";

describe("CopyEmailButton", () => {
  it("copies the configured email", async () => {
    const writeText = vi.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });

    render(<CopyEmailButton />);
    fireEvent.click(screen.getByRole("button", { name: /copy email/i }));

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith("fathguilherme@gmail.com");
      expect(screen.getByText(/email copied/i)).toBeInTheDocument();
    });
  });
});
