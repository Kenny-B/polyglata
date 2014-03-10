#region

using System;

#endregion

namespace Watches
{
    public class TimeProvider
    {
        private static Func<DateTime> _now;

        public static void Reset()
        {
            Now = () => DateTime.Now;
        }

        public static Func<DateTime> Now
        {
            get
            {
                if (_now == null)
                {
                    Reset();
                }
                return _now;
            }
            set { _now = value; }
        }
    }
}