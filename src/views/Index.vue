<template>
  <div>
    <div ref="editorContainer"></div>
  </div>
</template>

<script>
import {
  Editor,
  ListComponent,
  BlockComponent,
  AudioComponent,
  PreComponent,
  VideoComponent,
  ImageComponent,
  TableComponent,
  fontFamilyFormatter,
  boldFormatter,
  linkFormatter,
  backgroundColorFormatter,
  blockBackgroundColorFormatter,
  codeFormatter,
  colorFormatter,
  fontSizeFormatter,
  italicFormatter,
  letterSpacingFormatter,
  lineHeightFormatter,
  strikeThroughFormatter,
  subscriptFormatter,
  superscriptFormatter,
  textAlignFormatter,
  textIndentFormatter,
  underlineFormatter,
  dirFormatter,
  tdBorderColorFormatter,
  Toolbar,
  TOOLS,
  historyBackTool,
  historyForwardTool,
  insertObjectTool,
  headingTool,
  boldTool,
  italicTool,
  strikeThroughTool,
  underlineTool,
  olTool,
  ulTool,
  fontSizeTool,
  textIndentTool,
  colorTool,
  textBackgroundTool,
  insertParagraphBeforeTool,
  insertParagraphAfterTool,
  fontFamilyTool,
  linkTool,
  unlinkTool,
  imageTool,
  textAlignTool,
  tableTool,
  findTool,
  cleanTool,
  FullScreenPlugin,
} from "@textbus/textbus";
import "@textbus/textbus/bundles/textbus.min.css";

export default {
  name: "index",
  methods: {
    initEditor() {
      const options = {
        contents: "<p>欢迎你使用 <strong>TextBus 富文本编辑器！</strong></p>",
        components: [
          ListComponent, // ul、ol 列表组件
          BlockComponent, // 支持 div,p,h1,h2,h3,h4,h5,h6,blockquote,article,section,nav,header,footer 的块级元素组件
          PreComponent, // 代码块组件
          AudioComponent, // 音频组件
          VideoComponent, // 视频组件
          ImageComponent, // 图片组件
          TableComponent, // 表格组件
        ],
        formatters: [
          fontFamilyFormatter, // 字体
          boldFormatter, // 加粗
          linkFormatter, // 超链接
          backgroundColorFormatter, // 文字背景颜色
          blockBackgroundColorFormatter, // 块背景颜色
          codeFormatter, // 行内代码
          colorFormatter, // 字体颜色
          fontSizeFormatter, // 字体大小
          italicFormatter, // 斜体
          letterSpacingFormatter, // 文字间距
          lineHeightFormatter, // 行高
          strikeThroughFormatter, // 中划线
          subscriptFormatter, // 上角标
          superscriptFormatter, // 下角标
          textAlignFormatter, // 文字对齐方式
          textIndentFormatter, // 首行缩进
          underlineFormatter, // 下划线
          dirFormatter, // 内容排版方向
          tdBorderColorFormatter, // 表格边框颜色
        ],
        providers: [
          {
            provide: TOOLS,
            useValue: [
              [historyBackTool, historyForwardTool], // 撤销、重做
              // [insertObjectTool],// 插入代码、引用、音视频、表情等东西
              [headingTool], // 标题级数
              [boldTool, italicTool, strikeThroughTool, underlineTool], // 粗体、斜体、中画线、下划线
              [olTool, ulTool], // 有序列表、无序列表
              [
                fontSizeTool, 
                // textIndentTool
              ], // 字大小、首行缩进
              [colorTool, textBackgroundTool],// 字体颜色、字体背景颜色
              // [insertParagraphBeforeTool, insertParagraphAfterTool],// 在前面插入段落、在后面插入段落
              // [fontFamilyTool],// 字体
              [linkTool, unlinkTool],// 链接、取消链接
              [imageTool],// 插入图片
              [textAlignTool],// 文字排版
              [tableTool],// 表格
              // [findTool],// 查找
              // [cleanTool],// 消除格式
            ],
          },
        ],
        plugins: [
          Toolbar,
          FullScreenPlugin, // 全屏插件
        ],
      };
      const editor = new Editor(this.$refs.editorContainer, options);
    },
  },
  mounted() {
    this.initEditor();
  },
};
</script>
