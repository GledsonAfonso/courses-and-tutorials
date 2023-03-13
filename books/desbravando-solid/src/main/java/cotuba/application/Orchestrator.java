package cotuba.application;

import cotuba.domain.Ebook;
import cotuba.epub.EpubGenerator;
import cotuba.md.HtmlRender;
import cotuba.pdf.PdfGenerator;

public class Orchestrator {
  public void execute(OrchestratorParameters parameters) {
    var htmlRender = new HtmlRender();
    var chapters = htmlRender.render(parameters.getMarkdownPath());

    var ebook = new Ebook();
    ebook.setFormat(parameters.getFormat());
    ebook.setOutputPath(parameters.getOutputPath());
    ebook.setChapters(chapters);

    if ("pdf".equals(parameters.getFormat())) {
      var pdfGenerator = new PdfGenerator();
      pdfGenerator.generate(ebook);
    } else if ("epub".equals(parameters.getFormat())) {
      var epubGenerator = new EpubGenerator();
      epubGenerator.generate(ebook);
    } else {
      throw new IllegalArgumentException("Invalid ebook format: " + parameters.getFormat());
    }
  }
}
