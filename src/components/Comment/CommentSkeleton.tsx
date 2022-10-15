import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Desktop, Mobile } from "@/components/General/MediaQueryComponents";

interface Props {
	isLoggedIn: boolean;
}
function CommentSkeleton(props: Props) {
	return (
		<SkeletonTheme borderRadius="0.25em" duration={1} baseColor="#dedede" highlightColor="#efefef">
			<Mobile>
				<div className="skeleton f-col g-1-25" style={{ margin: "1em" }}>
					{/* Profile picture and username */}
					<div className="f-ai-c g-1">
						<Skeleton circle={true} width={32} height={32} />
						<div className="f-col g-0-25">
							<Skeleton containerClassName="f-ai-c" width={200} height={6} />
							<Skeleton containerClassName="f-ai-c" width={150} height={6} />
						</div>
					</div>

					{/* Message */}
					<div className="f-col g-0-25 w-100">
						<Skeleton containerClassName="f-ai-c" width="100%" height={10} />
						<Skeleton containerClassName="f-ai-c" width="75%" height={10} />
					</div>

					{/* Votes */}
					<div className="left-right g-1">
						<Skeleton width={92} height={36} />

						{/* Comment buttons */}
						{props.isLoggedIn && (
							<div className="f-ai-c g-1">
								<Skeleton width={12} height={18} />
								<Skeleton width={54} height={18} />
								<Skeleton width={66} height={18} />
							</div>
						)}
					</div>
				</div>
			</Mobile>

			<Desktop>
				<div className="skeleton f-center g-1-25" style={{ margin: "1em" }}>
					{/* Votes */}
					<Skeleton width={36} height={89} />

					<div className="f-col g-1 w-100">
						<div className="left-right g-1">
							<div className="f-ai-c g-1">
								{/* Profile picture and username */}
								<Skeleton circle={true} width={32} height={32} />
								<div className="f-col g-0-25">
									<Skeleton containerClassName="f-ai-c" width={200} height={6} />
									<Skeleton containerClassName="f-ai-c" width={150} height={6} />
								</div>
							</div>

							{/* Comment buttons */}
							{props.isLoggedIn && (
								<div className="f-ai-c g-1">
									<Skeleton width={71} height={18} />
									<Skeleton width={71} height={18} />
									<Skeleton width={71} height={18} />
								</div>
							)}
						</div>

						{/* Message */}
						<div className="f-col g-0-25">
							<Skeleton containerClassName="f-ai-c" width="100%" height={10} />
							<Skeleton containerClassName="f-ai-c" width="100%" height={10} />
							<Skeleton containerClassName="f-ai-c" width="75%" height={10} />
						</div>
					</div>
				</div>
			</Desktop>
		</SkeletonTheme>
	);
}

export default CommentSkeleton;
