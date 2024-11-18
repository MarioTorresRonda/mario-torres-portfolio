"use client";

import Message from "@/components/fragments/Message";
import BlogChapter from "@/components/newBlogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/newBlogs/blogFragments/BlogParagraph";
import BlogSubtitle from "@/components/newBlogs/blogFragments/BlogSubtitle";
import BlogTitle from "@/components/newBlogs/blogFragments/BlogTitle";
import BlogInit from "@/components/newBlogs/BlogInit";
import {useMessageText} from "@/hooks/useMessageText";

export const Blog = {
	jsx: <BlogInit />,
	children: [
		{ jsx: <BlogTitle code={["Blog", "title"]} />},
		{
			jsx: (
				<BlogChapter level={0} code={["Blog", "chapter 1"]}>
					<BlogParagraph>
						<Message code={["Blog", "chapter 1 desc"]}></Message>
					</BlogParagraph>
				</BlogChapter>
			),
			children : [
				{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
				{ jsx: <BlogTitle code={["Blog", "title"]} />},
				{
					jsx: (
						<BlogChapter level={0} code={["Blog", "chapter 1"]}>
							<BlogParagraph>
								<Message code={["Blog", "chapter 1 desc"]}></Message>
							</BlogParagraph>
						</BlogChapter>
					),
					children : [
						{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
						{ jsx: <BlogTitle code={["Blog", "title"]} />},
						{
							jsx: (
								<BlogChapter level={0} code={["Blog", "chapter 1"]}>
									<BlogParagraph>
										<Message code={["Blog", "chapter 1 desc"]}></Message>
									</BlogParagraph>
								</BlogChapter>
							),
							children : [
								{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
								{ jsx: <BlogTitle code={["Blog", "title"]} />},
								{
									jsx: (
										<BlogChapter level={0} code={["Blog", "chapter 1"]}>
											<BlogParagraph>
												<Message code={["Blog", "chapter 1 desc"]}></Message>
											</BlogParagraph>
										</BlogChapter>
									),
									children : [
										{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
										{ jsx: <BlogTitle code={["Blog", "title"]} />},
										{
											jsx: (
												<BlogChapter level={0} code={["Blog", "chapter 1"]}>
													<BlogParagraph>
														<Message code={["Blog", "chapter 1 desc"]}></Message>
													</BlogParagraph>
												</BlogChapter>
											),
											children : [
												{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
												{ jsx: <BlogTitle code={["Blog", "title"]} />},
											]
										},
									]
								},
								{
									jsx: (
										<BlogChapter level={0} code={["Blog", "chapter 1"]}>
											<BlogParagraph>
												<Message code={["Blog", "chapter 1 desc"]}></Message>
											</BlogParagraph>
										</BlogChapter>
									),
									children : [
										{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
										{ jsx: <BlogTitle code={["Blog", "title"]} />},
										{
											jsx: (
												<BlogChapter level={0} code={["Blog", "chapter 1"]}>
													<BlogParagraph>
														<Message code={["Blog", "chapter 1 desc"]}></Message>
													</BlogParagraph>
												</BlogChapter>
											),
											children : [
												{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
												{ jsx: <BlogTitle code={["Blog", "title"]} />},
												{
													jsx: (
														<BlogChapter level={0} code={["Blog", "chapter 1"]}>
															<BlogParagraph>
																<Message code={["Blog", "chapter 1 desc"]}></Message>
															</BlogParagraph>
														</BlogChapter>
													),
													children : [
														{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
														{ jsx: <BlogTitle code={["Blog", "title"]} />},
														{
															jsx: (
																<BlogChapter level={0} code={["Blog", "chapter 1"]}>
																	<BlogParagraph>
																		<Message code={["Blog", "chapter 1 desc"]}></Message>
																	</BlogParagraph>
																</BlogChapter>
															),
															children : [
																{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
																{ jsx: <BlogTitle code={["Blog", "title"]} />},
																{
																	jsx: (
																		<BlogChapter level={0} code={["Blog", "chapter 1"]}>
																			<BlogParagraph>
																				<Message code={["Blog", "chapter 1 desc"]}></Message>
																			</BlogParagraph>
																		</BlogChapter>
																	),
																	children : [
																		{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
																		{ jsx: <BlogTitle code={["Blog", "title"]} />},
																		{
																			jsx: (
																				<BlogChapter level={0} code={["Blog", "chapter 1"]}>
																					<BlogParagraph>
																						<Message code={["Blog", "chapter 1 desc"]}></Message>
																					</BlogParagraph>
																				</BlogChapter>
																			),
																			children : [
																				{ jsx: <BlogTitle code={["Blog", "chapter 2", "title"]} />},
																				{ jsx: <BlogTitle code={["Blog", "title"]} />},
																			]
																		},
																	]
																},
															]
														},
													]
												},
											]
										},
									]
								},
							]
						},
					]
				},
			]
		},
	],
};
