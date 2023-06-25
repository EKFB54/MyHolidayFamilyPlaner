package project.family.prio;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;


import project.family.holidaywish.HolidayWish;
import project.family.familymember.FamilyMember;

@Entity
public class Prio {
	//Variablen deklarieren mit verschiedenen Datentypen  
	
	@Id //Primärschlüssel in der Datenbank
	@GeneratedValue(strategy = GenerationType.AUTO) // ID wird automtisch vergeben
	private Long id;

	@ManyToOne //viele zu eine beziehung zu familienmitglied 
	@JoinColumn(name = "familymember_id", referencedColumnName = "id")
	private FamilyMember familyMember;
	//private List<FamilyMember> familymember;

	@ManyToOne //viele zu eine beziehung zu holidaywish
	@JoinColumn(name = "holiday_wish_id", referencedColumnName = "id")
	private HolidayWish holidayWish;

	private int priority;

	//Konstrukor default und ein Konstruktor mit parametern um die attribute zu setzen beim erstellen eines Objektes
	public Prio() {

	}

	public Prio(Long id, FamilyMember familyMember, HolidayWish holidayWish, int priority) {
		super();
		this.id = id;
		this.familyMember = familyMember;
		this.holidayWish = holidayWish;
		this.priority = priority;
	}

	//getter und setter methoden 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FamilyMember getFamilyMember() {
		return familyMember;
	}

	public void setFamilyMember(FamilyMember familyMember) {
		this.familyMember = familyMember;
	}

	public HolidayWish getHolidayWish() {
		return holidayWish;
	}

	public void setHolidayWish(HolidayWish holidayWish) {
		this.holidayWish = holidayWish;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

}

