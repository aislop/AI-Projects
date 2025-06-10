import os
import re
from urllib.parse import urlparse


def test_station_files_exist():
    index_path = os.path.join('Sites', 'yamanoteline', 'index.html')
    with open(index_path, encoding='utf-8') as f:
        content = f.read()

    mp3_announcements = re.findall(r"mp3Announcement:\s*\"([^\"]+)\"", content)
    mp3_stations = re.findall(r"mp3Station:\s*\"([^\"]+)\"", content)

    assert len(mp3_announcements) == len(mp3_stations) == 30

    all_paths = mp3_announcements + mp3_stations
    for url in all_paths:
        parsed = urlparse(url)
        rel_path = parsed.path.lstrip('/')
        assert os.path.isfile(rel_path)
