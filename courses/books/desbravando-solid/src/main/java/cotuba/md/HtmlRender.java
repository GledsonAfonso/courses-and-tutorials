package cotuba.md;

import java.nio.file.Path;
import java.util.List;

import cotuba.domain.Chapter;

public interface HtmlRender {
  List<Chapter> render(Path markdownPath);
}
