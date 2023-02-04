package cotuba.application;

import cotuba.domain.Ebook;

public class Orchestrator {
  public void execute(OrchestratorParameters parameters) {
    var htmlRender = HtmlRender.create();
    var chapters = htmlRender.render(parameters.getMarkdownPath());

    var ebook = new Ebook();
    ebook.setFormat(parameters.getFormat());
    ebook.setOutputPath(parameters.getOutputPath());
    ebook.setChapters(chapters);

    if ("pdf".equals(parameters.getFormat())) {
      var pdfGenerator = PdfGenerator.create();
      pdfGenerator.generate(ebook);
    } else if ("epub".equals(parameters.getFormat())) {
      var epubGenerator = EpubGenerator.create();
      epubGenerator.generate(ebook);
    } else {
      throw new IllegalArgumentException("Invalid ebook format: " + parameters.getFormat());
    }
  }
}
