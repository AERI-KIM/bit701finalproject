package data.service;

import java.util.List;

import data.dto.BoardDto;

public interface BoardServiceInter {
	public int getTotalCount();
	public void insertBoard(BoardDto dto);
	public List<BoardDto> getPageingList(int start, int perpage);
	public void updateReadcount(int num);
	public BoardDto datailPage(int num);
	public void delettBoard(int num);
}
