"""
五子棋 AI API — Vercel Serverless (Flask)
"""
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask, request, jsonify
from Wziqi_api import init

DEPTH_MAP = {'easy': 1, 'medium': 3, 'hard': 5}
_ai_cache = {}

app = Flask(__name__)


def get_ai(difficulty='medium'):
    if difficulty not in _ai_cache:
        depth = DEPTH_MAP.get(difficulty, 3)
        _ai_cache[difficulty] = init(15, 15, search_depth=depth)
    return _ai_cache[difficulty]


@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})


@app.route('/api/move', methods=['POST'])
def move():
    data = request.get_json(silent=True)
    if not data or 'board' not in data:
        return jsonify({'error': 'Missing board data'}), 400

    board_dict = data['board']
    difficulty = data.get('difficulty', 'medium')

    ai = get_ai(difficulty)
    full_board = ai.init_board()
    full_board.update(board_dict)

    result = ai.Runapi(full_board, auto_add=False)

    if result:
        key = list(result.keys())[0]
        row, col = map(int, key.split(','))
        return jsonify({'row': row, 'col': col, 'key': key})
    return jsonify({'error': 'No valid move'}), 500