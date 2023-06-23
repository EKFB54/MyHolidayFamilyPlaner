package family;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import prio.Prio;
import holidayWish.HolidayWish;

@Entity
public class FamilyMember {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	private long id; 
	private String firstName;
	private String secondName; 
	private Date bDay;
	
	@OneToMany(mappedBy="favoriteMember", cascade= CascadeType.REMOVE)
	@JsonIgnore
	private List<Prio> priorities;
	@OneToMany(mappedBy= "holdiay")
	public List<HolidayWish> wishes;
	


	public FamilyMember() {
		// TODO Auto-generated constructor stub
	}
	
	public FamilyMember(long id, String firstName, String secondName, Date bDay) {
		
	this.id = id;
	this.firstName = firstName;
	this.secondName = secondName;
	this.bDay = bDay;
		
	}

	//@return the id
	public long getId() {
		return id;
	}

	//@param id the id to set
	public void setId(long id) {
		this.id = id;
	}

	//@return the firstName
	public String getFirstName() {
		return firstName;
	}

	//@param firstName the firstName to set
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	//@return the secondName
	public String getSecondName() {
		return secondName;
	}

	// @param secondName the secondName to set
	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	//@return the bDay
	public Date getbDay() {
		return bDay;
	}

	//@param bDay the bDay to set
	public void setbDay(Date bDay) {
		this.bDay = bDay;
	}

}
