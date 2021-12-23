#!/usr/bin/env python3

import json
import pandas as pd
  
# Read input file
df = pd.read_fwf('data.txt', delimiter="\t")

# Convert to JSON file
result = df.to_json('data.json', orient="values")