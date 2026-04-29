import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";

export default function Work() {

	const files = [
		{
			route: "data/blogs/Future0PM/files/AskFragment.txt",
			name: "AskFragment.cs",
		},
		{
			route: "data/blogs/Future0PM/files/PuzzleManager.txt",
			name: "PuzzleManager.cs",
		},
		{
			route: "data/blogs/Future0PM/files/MovilVentanaPreguntaFragmentos.txt",
			name: "MovilVentanaPreguntaFragmentos.cs",
		},
		{
			route: "data/blogs/Future0PM/files/Pregunta.txt",
			name: "Pregunta.cs",
		},
		{
			route: "data/blogs/Future0PM/files/PuuzzlePointsManager.txt",
			name: "PuuzzlePointsManager.cs",
		},
		{
			route: "data/blogs/Future0PM/files/PuzzlePointsPanel.txt",
			name: "PuzzlePointsPanel.cs",
		},
	];

	const files1 = [...files];
	files1[0] = {...files1[0], ...{selected: true, from: 8, to: 27}};
	const files2 = [...files];
	files2[0] = {...files2[0], ...{selected: true, from: 108, to: 115}};
	const files3 = [...files];
	files3[1] = {...files3[1], ...{selected: true, from: 58, to: 71 }};
	const files4 = [...files];
	files4[2] = {...files4[2], ...{selected: true, from: 16, to: 21 }};
	const files5 = [...files];
	files5[3] = {...files5[3], ...{selected: true, from: 23, to: 30 }};
	const files6 = [...files];
	files6[4] = {...files6[4], ...{selected: true, from: 6, to: 6 }};
	const files7 = [...files];
	files7[4] = {...files7[4], ...{selected: true, from: 37, to: 56 }};
	const files8 = [...files];
	files8[4] = {...files8[4], ...{selected: true, from: 58, to: 63 }};
	const files9 = [...files];
	files9[4] = {...files9[4], ...{selected: true, from: 65, to: 73 }};

	return (
		<BlogChapter code={["Future0PM", "work", "title"]}>
			<BlogParagraph >
				<Message code={["Future0PM", "work", "text"]}></Message>
			</BlogParagraph>
			<BlogChapter code={["Future0PM", "work", "comand", "title"]}>
				<BlogParagraph >
					<Message code={["Future0PM", "work", "comand", "text1"]}></Message>
				</BlogParagraph>
				<CodeBox files={files1} key="files1"></CodeBox>
				<BlogParagraph >
					<Message code={["Future0PM", "work", "comand", "text2"]}></Message>
				</BlogParagraph>
				<CodeBox files={files2} key="files2"></CodeBox>
			</BlogChapter>
			<BlogChapter code={["Future0PM", "work", "puzzleSystem", "title"]}>
				<BlogParagraph >
					<Message code={["Future0PM", "work", "puzzleSystem", "text1"]}></Message>
				</BlogParagraph>
				<CodeBox files={files3} key="files3"></CodeBox>
				<BlogParagraph >
					<Message code={["Future0PM", "work", "puzzleSystem", "text2"]}></Message>
				</BlogParagraph>
			</BlogChapter>
			<BlogChapter code={["Future0PM", "work", "FragmentViewWindow", "title"]}>
				<BlogParagraph >
					<Message code={["Future0PM", "work", "FragmentViewWindow", "text1"]}></Message>
				</BlogParagraph>
				<CodeBox files={files4} key="files4"></CodeBox>
				<BlogParagraph >
					<Message code={["Future0PM", "work", "FragmentViewWindow", "text2"]}></Message>
				</BlogParagraph>
				<CodeBox files={files5} key="files5"></CodeBox>
			</BlogChapter>
			<BlogChapter code={["Future0PM", "work", "pointSystem", "title"]}>
				<BlogParagraph>
					<Message code={["Future0PM", "work", "pointSystem", "text1"]}></Message>
				</BlogParagraph>
				<CodeBox files={files6} key="files6"></CodeBox>
				<BlogParagraph>
					<Message code={["Future0PM", "work", "pointSystem", "text2"]}></Message>
				</BlogParagraph>
				<CodeBox files={files7} key="files7"></CodeBox>
				<BlogParagraph>
					<Message code={["Future0PM", "work", "pointSystem", "text3"]}></Message>
				</BlogParagraph>
				<CodeBox files={files8} key="files8"></CodeBox>
				<BlogParagraph>
					<Message code={["Future0PM", "work", "pointSystem", "text4"]}></Message>
				</BlogParagraph>
				<CodeBox files={files9} key="files9"></CodeBox>
			</BlogChapter>
		</BlogChapter>
	);
}
