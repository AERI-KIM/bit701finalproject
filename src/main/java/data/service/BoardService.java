package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import data.dto.BoardDto;
import data.mapper.BoardMapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BoardService implements BoardServiceInter {

	private BoardMapper boardmapper;
	
	@Override
	public int getTotalCount() {
		// TODO Auto-generated method stub
		return boardmapper.getTotalCount();
	}
	
	
	@Override
	public void insertBoard(BoardDto dto) {
		// TODO Auto-generated method stub
		boardmapper.insertBoard(dto);

	}

	@Override
	public List<BoardDto> getPageingList(int start, int perpage) {
		// TODO Auto-generated method stub
		Map<String, Integer> map =new HashMap<>();
		map.put("start", start);
		map.put("perpage",perpage);
		
		return boardmapper.getPageingList(map);
	}

	@Override
	public void updateReadcount(int num) {
		// TODO Auto-generated method stub
		boardmapper.updateReadcount(num);
	}

	@Override
	public BoardDto datailPage(int num) {
		// TODO Auto-generated method stub
		return boardmapper.datailPage(num);
	}

	@Override
	public void delettBoard(int num) {
		// TODO Auto-generated method stub
		boardmapper.delettBoard(num);
	}

	

	


}
