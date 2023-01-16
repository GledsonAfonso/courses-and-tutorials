package cotuba.application;

import cotuba.cli.Cli;
import cotuba.domain.Ebook;
import cotuba.epub.EpubGenerator;
import cotuba.epub.impl.EpubGeneratorImpl;
import cotuba.md.HtmlRender;
import cotuba.md.impl.HtmlRenderImpl;
import cotuba.pdf.PdfGenerator;
import cotuba.pdf.impl.PdfGeneratorImpl;

public class Orchestrator {
  public void execute(Cli cli) {
    HtmlRender htmlRender = new HtmlRenderImpl();
    var chapters = htmlRender.render(cli.getMarkdownPath());

    var ebook = new Ebook();
    ebook.setFormat(cli.getFormat());
    ebook.setOutputPath(cli.getOutputPath());
    ebook.setChapters(chapters);

    if ("pdf".equals(cli.getFormat())) {
      PdfGenerator pdfGenerator = new PdfGeneratorImpl();
      pdfGenerator.generate(ebook);
    } else if ("epub".equals(cli.getFormat())) {
      EpubGenerator epubGenerator = new EpubGeneratorImpl();
      epubGenerator.generate(ebook);
    } else {
      throw new IllegalArgumentException("Invalid ebook format: " + cli.getFormat());
    }
  }
}
