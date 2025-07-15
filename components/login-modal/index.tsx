import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const LoginModal = ({
  open,
  onClose,
  title = "Login is not available",
  description = "This feature is currently disabled as the application no longer relies on Hugging Face authentication.",
}: {
  open: boolean;
  html?: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  description?: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg lg:!p-8 !rounded-3xl !bg-white !border-neutral-100">
        <DialogTitle className="hidden" />
        <main className="flex flex-col items-start text-left relative pt-2">
          <div className="flex items-center justify-start -space-x-4 mb-5">
            <div className="size-14 rounded-full bg-pink-200 shadow-2xs flex items-center justify-center text-3xl opacity-50">
              💪
            </div>
            <div className="size-16 rounded-full bg-amber-200 shadow-2xl flex items-center justify-center text-4xl z-2">
              😎
            </div>
            <div className="size-14 rounded-full bg-sky-200 shadow-2xs flex items-center justify-center text-3xl opacity-50">
              🙌
            </div>
          </div>
          <p className="text-2xl font-bold text-neutral-950">{title}</p>
          <p className="text-neutral-500 text-base mt-2 max-w-sm">
            {description}
          </p>
          <Button
            variant="black"
            size="lg"
            className="w-full !text-base !h-11 mt-8"
            onClick={() => onClose(false)}
          >
            Close
          </Button>
        </main>
      </DialogContent>
    </Dialog>
  );
};