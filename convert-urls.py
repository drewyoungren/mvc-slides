import sys, re, base64

def enc(matchobj):
  attrib, base, query = matchobj.groups()
  outpud = base64.b64encode(query.encode("utf-8")).decode("utf-8")
  print(attrib)
  return attrib + '="' + base + outpud +'"'

def convert_file(filename):
  with open(filename, 'r') as fin:
    content = fin.read()
    content_new, n = re.subn(r'(href|src)="(https://3demos.ctl.columbia.edu/\?)(.*)"', enc, content, flags=re.M)
    print(n, "times.")
  with open("fake_lec.html", 'w') as fout:
    fout.write(content_new)


for p in sys.argv[1:]:
  convert_file(p)
  print(p, "done.")