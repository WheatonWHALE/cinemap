import sys
import json
data = [ { 'a':'A', 'b':(2, 4), 'c':3.0, sys.argv[1]:True } ]
print json.dumps(data)