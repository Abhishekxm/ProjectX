import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

interface SparklineChartProps {
    data: number[];
    color: string;
    width?: number;
    height?: number;
}

/**
 * SparklineChart — A minimal, axes-free line chart for use inside commodity cards.
 * Driven by react-native-gifted-charts (which in turn uses react-native-svg).
 */
export const SparklineChart: React.FC<SparklineChartProps> = ({
    data,
    color,
    width = 110,
    height = 40,
}) => {
    const chartData = data.map(value => ({ value }));

    return (
        <View style={{ width, height, overflow: 'hidden' }}>
            <LineChart
                data={chartData}
                width={width}
                height={height}
                hideDataPoints
                hideAxesAndRules
                hideYAxisText
                xAxisLabelsHeight={0}
                initialSpacing={0}
                endSpacing={0}
                thickness={2}
                color={color}
                startFillColor={color}
                endFillColor="transparent"
                startOpacity={0.15}
                endOpacity={0}
                areaChart
                curved
                overflowTop={0}
                overflowBottom={0}
                noOfSections={2}
                rulesColor="transparent"
                yAxisColor="transparent"
                xAxisColor="transparent"
            />
        </View>
    );
};
