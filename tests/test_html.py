import pathlib
import re

def test_root_title():
    data = pathlib.Path(__file__).resolve().parents[1].joinpath('index.html').read_text(encoding='utf-8')
    assert '<title>Made With Only AI</title>' in data

def test_yamanoteline_title():
    data = pathlib.Path(__file__).resolve().parents[1].joinpath('Sites/yamanoteline/index.html').read_text(encoding='utf-8')
    assert '<title>Yamanote Line - Stations on Circle with Dark Mode</title>' in data

def test_station_count():
    data = pathlib.Path(__file__).resolve().parents[1].joinpath('Sites/yamanoteline/index.html').read_text(encoding='utf-8')
    match = re.search(r"const stations = \[(.*?)\];", data, re.S)
    assert match, "Station array not found"
    station_block = match.group(1)
    count = len(re.findall(r'mp3Station', station_block))
    assert count == 29
