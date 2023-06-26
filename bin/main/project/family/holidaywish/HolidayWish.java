package project.family.holidaywish;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;


import project.family.prio.Prio;
import project.family.familymember.FamilyMember;
import project.family.holiday.Holiday;

@Entity
public class HolidayWish {
	//Variablen deklarien mit verschiedenen Datentypen 
	
	@Id //Primärschlüssel in der Datenbank
	private long id; 
	private String description;

	//private Holiday holiday; 
	
	@ManyToOne //viele zu eine beziehung zu holiday
	@JoinColumn(name = "urlaub_ID", referencedColumnName = "urlaubID")
	private Holiday holiday;
	
	@OneToMany(mappedBy = "holidayWish") //eine zu viele beziehung zu prio
	@JsonIgnore
	private List<Prio> priorities;
	

	@Transient
	private int sumPriority;



	//Konstrukor default und ein Konstruktor mit parametern um die attribute zu setzen beim erstellen eines Objektes
	public HolidayWish() {
		// TODO Auto-generated constructor stub
	}


	public HolidayWish(long id, String description, Holiday holiday) {
		super();
		this.id = id;
		this.description = description;
		this.holiday=holiday;
	}
	//getter und setter methoden 
	
	public List<Prio> getPriorities() {
		return priorities;
	}

	public void setPriorities(List<Prio> priorities) {
		this.priorities = priorities;
	}
	
	/**
	 * @return the holiday
	 */
	public Holiday getHoliday() {
		return holiday;
	}

	public void setSumPriority(int sumPriority) {
		this.sumPriority = sumPriority;
	}

	/**
	 * @param holiday the holiday to set
	 */
	public void setHoliday(Holiday holiday) {
		this.holiday = holiday;
	}

	/**
	 * @return the iDHolidayWisch
	 */
	public long getId() {
		return id;
	}


	/**
	 * @param iDHolidayWish the iDHolidayWish to set
	 */
	public void setId(long id) {
		this.id = id;
	}


	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}


	/**
	 * @param ort the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	

}
