import React from "react";
import Dialog from "@/components/molecules/Dialog";
import PortfolioDialogContent from "@/components/atoms/PortfolioDialogContent";
import type { ProjectDetails } from "@/components/atoms/PortfolioDialogContent";

interface Props {
  project: ProjectDetails | null;
  onClose: () => void;
}

const Index = ({ project, onClose }: Props) => (
  <Dialog isOpen={!!project} onClose={onClose} title={project?.title || ""}>
    {project && <PortfolioDialogContent project={project} />}
  </Dialog>
);

export default Index;
