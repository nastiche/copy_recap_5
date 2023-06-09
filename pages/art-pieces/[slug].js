import ArtPieceDetails from "@/components/ArtPieceDetails";

import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  artPiecesInfo,
  pieces,
  onToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) return <div>...loading</div>;
  return (
    <>
      <ArtPieceDetails
        {...piece}
        onToggleFavorite={onToggleFavorite}
        onSubmitComment={onSubmitComment}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
