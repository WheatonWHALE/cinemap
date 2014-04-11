import zerorpc
import json
import logging
logging.basicConfig()

class CineRPC(object):
	def hello(self):
		return json.dumps([ { 'a':'A', 'b':(2, 4), 'c':3.0 } ])

s = zerorpc.Server(CineRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()