package cotuba.application;

import cotuba.cli.Cli;
import cotuba.domain.Ebook;

public class Orchestrator {
  public void execute(Cli cli) {
    var htmlRender = HtmlRender.create();
    var chapters = htmlRender.render(cli.getMarkdownPath());

    var ebook = new Ebook();
    ebook.setFormat(cli.getFormat());
    ebook.setOutputPath(cli.getOutputPath());
    ebook.setChapters(chapters);

    if ("pdf".equals(cli.getFormat())) {
      var pdfGenerator = PdfGenerator.create();
      pdfGenerator.generate(ebook);
    } else if ("epub".equals(cli.getFormat())) {
      var epubGenerator = EpubGenerator.create();
      epubGenerator.generate(ebook);
    } else {
      throw new IllegalArgumentException("Invalid ebook format: " + cli.getFormat());
    }
  }
}
