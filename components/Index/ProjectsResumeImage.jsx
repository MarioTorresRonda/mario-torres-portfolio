"use client";

import {MenuContext} from "@/store/menu-context";
import {useEffect, useState} from "react";
import ClientImage from "../fragments/ClientImage";
import Message from "../fragments/Message";
import {useMessageText} from "@/hooks/useMessageText";
import { projectList } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function ProjectResumeImage( {project} ) {
	const [oldProject, setOldProject] = useState( projectList[0] );
	const getText = useMessageText();
    const router = useRouter();

	var isShow = oldProject == project;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setOldProject(project);
		}, 200);

		return () => {
			clearTimeout(timeout);
		};
	}, [project, oldProject]);

    function OnClickImage() {
        router.push(project.url, { scroll: false })
    }

	return (
		<div>
			<div className="overflow-hidden max-w-[400px] ">
				<div className={(!isShow ? "-translate-y-80" : "") + " transition-all flex justify-center"}>
					<ClientImage
						onClick={OnClickImage}
						height={250}
						className=" mt-3 mb-5 scale-100 hover:scale-110 transition-all w-auto"
						src={oldProject.image}
						alt={["mainPage", "blogs", "imageAlt"]}
					/>
				</div>
			</div>
		</div>
	);
}
