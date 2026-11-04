"""Dependency-free checks for navigation, labels and hosting configuration."""
from html.parser import HTMLParser
from pathlib import Path
import json
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.ids=[];self.links=[];self.labels=[];self.files=[];self.fields={}
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='a' and a.get('href','').startswith('#') and len(a['href'])>1:self.links.append(a['href'][1:])
  if tag=='label':self.labels.append(a['for'])
  if tag in ('input','select','textarea'):self.fields[a['id']]=a
  if tag=='script' and 'src' in a:self.files.append(a['src'])
  if tag=='link' and not a.get('href','').startswith('http'):self.files.append(a['href'])
p=Page();p.feed(Path('index.html').read_text())
assert len(p.ids)==len(set(p.ids)), 'Duplicate IDs'
assert all(x in p.ids for x in p.links), 'Broken navigation'
assert all(x in p.fields for x in p.labels), 'Missing form labels'
assert all(Path(x).is_file() for x in p.files), 'Missing local assets'
assert all('required' in p.fields[x] for x in ('name','email','message'))
v=json.loads(Path('vercel.json').read_text());assert v['outputDirectory']=='.' and v['framework'] is None
print('PASS: navigation, IDs, form labels, required fields, local assets and Vercel configuration')
