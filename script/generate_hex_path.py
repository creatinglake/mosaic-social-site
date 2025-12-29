import math

def create_rounded_hexagon_path(radius, corner_radius):
    # Angles for a flat-topped hexagon (vertices at 0, 60, 120, 180, 240, 300)
    # Current SVG has vertices at 0, 60... wait.
    # Current SVG points: 100,0 (0 deg) ... 50,-86.6 (-60 deg or 300 deg)
    # Let's map the current points to angles.
    # (100, 0) -> 0 deg
    # (50, -86.6) -> -60 deg (300 deg)
    # (-50, -86.6) -> -120 deg (240 deg)
    # (-100, 0) -> 180 deg
    # (-50, 86.6) -> 120 deg
    # (50, 86.6) -> 60 deg
    
    # Wait, 50, 86.6 is angle 60?
    # cos(60) = 0.5 -> 50. sin(60) = 0.866 -> 86.6.
    # Yes.
    # So vertices are at 0, 60, 120, 180, 240, 300.
    
    points = []
    for i in range(6):
        angle_deg = i * 60
        angle_rad = math.radians(angle_deg)
        x = radius * math.cos(angle_rad)
        y = radius * math.sin(angle_rad)
        points.append((x, y))
    
    # Generate path with rounded corners
    d = []
    
    for i in range(6):
        # Current vertex
        curr_p = points[i]
        # Previous vertex
        prev_p = points[(i - 1) % 6]
        # Next vertex
        next_p = points[(i + 1) % 6]
        
        # Vector from current to prev
        v_prev = (prev_p[0] - curr_p[0], prev_p[1] - curr_p[1])
        len_prev = math.sqrt(v_prev[0]**2 + v_prev[1]**2)
        v_prev = (v_prev[0] / len_prev, v_prev[1] / len_prev)
        
        # Vector from current to next
        v_next = (next_p[0] - curr_p[0], next_p[1] - curr_p[1])
        len_next = math.sqrt(v_next[0]**2 + v_next[1]**2)
        v_next = (v_next[0] / len_next, v_next[1] / len_next)
        
        # Start of curve (move back from corner along incoming edge)
        # Actually, let's just use the distance `corner_radius` from the vertex
        # But for non-90 deg, the distance along edge is different from radius.
        # Angle is 120. Half angle 60.
        # distance_along_edge = corner_radius / tan(60)
        # tan(60) = sqrt(3) = 1.732
        
        dist = corner_radius / math.tan(math.radians(60))
        
        # Point A (end of previous line segment)
        p_a = (curr_p[0] + v_prev[0] * dist, curr_p[1] + v_prev[1] * dist)
        
        # Point B (start of next line segment)
        p_b = (curr_p[0] + v_next[0] * dist, curr_p[1] + v_next[1] * dist)
        
        if i == 0:
            d.append(f"M {p_a[0]:.2f},{p_a[1]:.2f}")
        else:
            d.append(f"L {p_a[0]:.2f},{p_a[1]:.2f}")
            
        # Quadratic curve to p_b using curr_p as control point
        d.append(f"Q {curr_p[0]:.2f},{curr_p[1]:.2f} {p_b[0]:.2f},{p_b[1]:.2f}")
        
    d.append("Z")
    return " ".join(d)

print(create_rounded_hexagon_path(100, 15))
